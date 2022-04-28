import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Loader from "./Loader";
import RenditionsModal from "./RenditionModal";
import Paginator from "./Paginator";
import SearchForm from "./SearchForm";
import SearchResults from "./ResultContainer";
import ErrorMsg from "./ErrorMsg";
import * as ApiService from "../Services/results";

function AppContainer() {
  /*Search */
  const [loading, setLoading] = useState(false);
  const [errorsMsg, setErrorMsg] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  /*Modal */
  const [showModal, setModal] = useState(false);
  const [overlayData, setOverlayData] = useState({});

  /*Pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const inputRef = useRef(null);

  /* Setting Focus */
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  /* Get display items from bulk data*/
  const getDisplayItems = useMemo(() => {
    return searchResults.slice(indexOfFirstItem, indexOfLastItem);
  }, [searchResults, indexOfFirstItem, indexOfLastItem]);

  const currentItems = getDisplayItems;

  const handleSearch = useCallback(() => {
    if (inputRef.current.value !== "") {
      var keyword = inputRef.current.value;
      setLoading(true);
      getResults(keyword);
    } else {
      setErrorMsg("Please enter some text");
    }
  }, []);

  const handleClear = useCallback(() => {
    inputRef.current.value = "";
  }, []);

  const handleItemClick = useCallback(
    (e) => {
      var overlayData = [];
      if (e.target.id !== "") {
        for (var iter = 0; iter < searchResults.length; iter++) {
          if (searchResults[iter].id === e.target.id) {
            overlayData = searchResults[iter].images;
            setOverlayData(overlayData);
            setModal(true);
            return;
          }
        }
      }
    },
    [searchResults]
  );

  const closeModal = () => {
    console.log("close modal called");
    setModal(false);
  };

  const pageSelect = (num) => {
    setCurrentPage(num);
  };

  const getResults = async (keyword) => {
    try {
      const response = await ApiService.getResults(keyword);
      setLoading(false);
      setErrorMsg("");
      if (response?.data?.data.length > 0) {
        //console.log("Search text", response.data.data);
        setSearchResults(response.data.data);
      } else {
        setSearchResults([]);
        setErrorMsg("Data not found");
      }
    } catch (ex) {
      setSearchResults([]);
      setErrorMsg(ex.message);
      setLoading(false);
    }
  };

  return (
    <div className="App-container">
      <SearchForm
        inputRef={inputRef}
        handleClear={handleClear}
        handleSearch={handleSearch}
      />
      {searchResults.length > 0 && !loading && (
        <Paginator
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={searchResults.length}
          pageSelect={pageSelect}
        />
      )}
      {loading && <Loader />}
      {errorsMsg && <ErrorMsg msg={errorsMsg} />}

      <SearchResults
        handleItemClick={handleItemClick}
        currentItems={currentItems}
      />

      { (
        <RenditionsModal
          data={overlayData}
          showModal={showModal}
          closeModal={closeModal}
        ></RenditionsModal>
      )}
    </div>
  );
}

export default AppContainer;
