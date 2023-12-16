exports.formatListing = (pageNumber, recordCount, data) => {
  const pageSize = parseInt(process.env.PAGE_SIZE, 10);
  const pageCount = Math.ceil(recordCount / pageSize);

  return {
    page_number: pageNumber,
    page_count: pageCount,
    record_count: recordCount,
    data,
  };
};
