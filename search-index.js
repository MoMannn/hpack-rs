var searchIndex = JSON.parse('{\
"cfg_if":{"doc":"A macro for defining `#[cfg]` if-else statements.","i":[[14,"cfg_if","cfg_if","The main macro provided by this crate. See crate…",null,null]],"p":[]},\
"hpack":{"doc":"A module implementing HPACK functionality. Exposes a…","i":[[0,"encoder","hpack","Implements all functionality related to encoding header…",null,null],[3,"Encoder","hpack::encoder","Represents an HPACK encoder. Allows clients to encode…",null,null],[5,"encode_integer_into","","Encode an integer to the representation defined by HPACK,…",null,[[],["result",6]]],[5,"encode_integer","","Encode an integer to the representation defined by HPACK.",null,[[],["vec",3]]],[11,"new","","Creates a new `Encoder` with a default static table, as…",0,[[],["encoder",3]]],[11,"encode","","Encodes the given headers using the HPACK rules and…",0,[[],["vec",3]]],[11,"encode_into","","Encodes the given headers into the given `io::Write`…",0,[[],["result",6]]],[11,"encode_header_into","","Encodes a single given header into the given `io::Write`…",0,[[],["result",6]]],[0,"decoder","hpack","Exposes the struct `Decoder` that allows for HPACK-encoded…",null,null],[3,"Decoder","hpack::decoder","Decodes headers encoded using HPACK.",null,null],[4,"IntegerDecodingError","","Represents all errors that can be encountered while…",null,null],[13,"TooManyOctets","","5.1. specifies that \\\"excessively large integer decodings\\\"…",1,null],[13,"ValueTooLarge","","The variant corresponds to the case where the value of the…",1,null],[13,"NotEnoughOctets","","When a buffer from which an integer was supposed to be…",1,null],[13,"InvalidPrefix","","Only valid prefixes are [1, 8]",1,null],[4,"StringDecodingError","","Represents all errors that can be encountered while…",null,null],[13,"NotEnoughOctets","","",2,null],[13,"HuffmanDecoderError","","",2,null],[4,"DecoderError","","Represents all errors that can be encountered while…",null,null],[13,"HeaderIndexOutOfBounds","","",3,null],[13,"IntegerDecodingError","","",3,null],[13,"StringDecodingError","","",3,null],[13,"InvalidMaxDynamicSize","","The size of the dynamic table can never be allowed to…",3,null],[6,"DecoderResult","","The result returned by the `decode` method of the `Decoder`.",null,null],[11,"new","","Creates a new `Decoder` with all settings set to default…",4,[[],["decoder",3]]],[11,"set_max_table_size","","Sets a new maximum dynamic table size for the decoder.",4,[[]]],[11,"decode_with_cb","","Decodes the headers found in the given buffer `buf`.…",4,[[],[["result",4],["decodererror",4]]]],[11,"decode","","Decode the header block found in the given buffer.",4,[[],["decoderresult",6]]],[0,"huffman","hpack","A module exposing utilities for encoding and decoding…",null,null],[3,"HuffmanDecoder","hpack::huffman","A simple implementation of a Huffman code decoder.",null,null],[4,"HuffmanDecoderError","","Represents the error variants that the `HuffmanDecoder`…",null,null],[13,"PaddingTooLarge","","Any padding strictly larger than 7 bits MUST be…",5,null],[13,"InvalidPadding","","Any padding that does not correspond to the most…",5,null],[13,"EOSInString","","If EOS is ever found in the string, it causes an error.",5,null],[6,"HuffmanDecoderResult","","The type that represents the result of the `decode` method…",null,null],[11,"new","","Constructs a new HuffmanDecoder with the default Huffman…",6,[[],["huffmandecoder",3]]],[11,"decode","","Decodes the buffer `buf` into a newly allocated `Vec`.",6,[[],["huffmandecoderresult",6]]],[11,"from","hpack::encoder","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","hpack::decoder","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","hpack::huffman","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"clone","hpack::decoder","",1,[[],["integerdecodingerror",4]]],[11,"clone","","",2,[[],["stringdecodingerror",4]]],[11,"clone","","",3,[[],["decodererror",4]]],[11,"clone","hpack::huffman","",5,[[],["huffmandecodererror",4]]],[11,"eq","hpack::decoder","",1,[[["integerdecodingerror",4]]]],[11,"eq","","",2,[[["stringdecodingerror",4]]]],[11,"ne","","",2,[[["stringdecodingerror",4]]]],[11,"eq","","",3,[[["decodererror",4]]]],[11,"ne","","",3,[[["decodererror",4]]]],[11,"eq","hpack::huffman","",5,[[["huffmandecodererror",4]]]],[11,"fmt","hpack::decoder","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","hpack::huffman","",5,[[["formatter",3]],["result",6]]]],"p":[[3,"Encoder"],[4,"IntegerDecodingError"],[4,"StringDecodingError"],[4,"DecoderError"],[3,"Decoder"],[4,"HuffmanDecoderError"],[3,"HuffmanDecoder"]]},\
"log":{"doc":"A lightweight logging facade.","i":[[3,"LogRecord","log","The \\\"payload\\\" of a log message.",null,null],[3,"LogMetadata","","Metadata about a log message.",null,null],[3,"LogLocation","","The location of a log message.",null,null],[3,"MaxLogLevelFilter","","A token providing read and write access to the global…",null,null],[3,"SetLoggerError","","The type returned by `set_logger` if `set_logger` has…",null,null],[3,"ShutdownLoggerError","","The type returned by `shutdown_logger_raw` if…",null,null],[4,"LogLevel","","An enum representing the available verbosity levels of the…",null,null],[13,"Error","","The \\\"error\\\" level.",0,null],[13,"Warn","","The \\\"warn\\\" level.",0,null],[13,"Info","","The \\\"info\\\" level.",0,null],[13,"Debug","","The \\\"debug\\\" level.",0,null],[13,"Trace","","The \\\"trace\\\" level.",0,null],[4,"LogLevelFilter","","An enum representing the available verbosity level filters…",null,null],[13,"Off","","A level lower than all log levels.",1,null],[13,"Error","","Corresponds to the `Error` log level.",1,null],[13,"Warn","","Corresponds to the `Warn` log level.",1,null],[13,"Info","","Corresponds to the `Info` log level.",1,null],[13,"Debug","","Corresponds to the `Debug` log level.",1,null],[13,"Trace","","Corresponds to the `Trace` log level.",1,null],[5,"max_log_level","","Returns the current maximum log level.",null,[[],["loglevelfilter",4]]],[5,"set_logger","","Sets the global logger.",null,[[],[["result",4],["setloggererror",3]]]],[5,"set_logger_raw","","Sets the global logger from a raw pointer.",null,[[],[["result",4],["setloggererror",3]]]],[5,"shutdown_logger","","Shuts down the global logger.",null,[[],[["shutdownloggererror",3],["result",4],["box",3]]]],[5,"shutdown_logger_raw","","Shuts down the global logger.",null,[[],[["shutdownloggererror",3],["result",4]]]],[8,"Log","","A trait encapsulating the operations required of a logger",null,null],[10,"enabled","","Determines if a log message with the specified metadata…",2,[[["logmetadata",3]]]],[10,"log","","Logs the `LogRecord`.",2,[[["logrecord",3]]]],[11,"max","","Returns the most verbose logging level.",0,[[],["loglevel",4]]],[11,"to_log_level_filter","","Converts the `LogLevel` to the equivalent `LogLevelFilter`.",0,[[],["loglevelfilter",4]]],[11,"max","","Returns the most verbose logging level filter.",1,[[],["loglevelfilter",4]]],[11,"to_log_level","","Converts `self` to the equivalent `LogLevel`.",1,[[],[["loglevel",4],["option",4]]]],[11,"args","","The message body.",3,[[],["arguments",3]]],[11,"metadata","","Metadata about the log directive.",3,[[],["logmetadata",3]]],[11,"location","","The location of the log directive.",3,[[],["loglocation",3]]],[11,"level","","The verbosity level of the message.",3,[[],["loglevel",4]]],[11,"target","","The name of the target of the directive.",3,[[]]],[11,"level","","The verbosity level of the message.",4,[[],["loglevel",4]]],[11,"target","","The name of the target of the directive.",4,[[]]],[11,"module_path","","The module path of the message.",5,[[]]],[11,"file","","The source file containing the message.",5,[[]]],[11,"line","","The line containing the message.",5,[[]]],[11,"get","","Gets the current maximum log level filter.",6,[[],["loglevelfilter",4]]],[11,"set","","Sets the maximum log level.",6,[[["loglevelfilter",4]]]],[14,"log","","The standard logging macro.",null,null],[14,"error","","Logs a message at the error level.",null,null],[14,"warn","","Logs a message at the warn level.",null,null],[14,"info","","Logs a message at the info level.",null,null],[14,"debug","","Logs a message at the debug level.",null,null],[14,"trace","","Logs a message at the trace level.",null,null],[14,"log_enabled","","Determines if a message logged at the specified level in…",null,null],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_string","","",7,[[],["string",3]]],[11,"borrow","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_string","","",8,[[],["string",3]]],[11,"borrow","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"borrow","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"to_string","","",1,[[],["string",3]]],[11,"borrow","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"clone","","",0,[[],["loglevel",4]]],[11,"clone","","",1,[[],["loglevelfilter",4]]],[11,"clone","","",5,[[],["loglocation",3]]],[11,"cmp","","",0,[[["loglevel",4]],["ordering",4]]],[11,"cmp","","",1,[[["loglevelfilter",4]],["ordering",4]]],[11,"eq","","",0,[[["loglevel",4]]]],[11,"eq","","",0,[[["loglevelfilter",4]]]],[11,"eq","","",1,[[["loglevelfilter",4]]]],[11,"eq","","",1,[[["loglevel",4]]]],[11,"partial_cmp","","",0,[[["loglevel",4]],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",0,[[["loglevelfilter",4]],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",1,[[["loglevelfilter",4]],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",1,[[["loglevel",4]],[["option",4],["ordering",4]]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"from_str","","",0,[[],[["result",4],["loglevel",4]]]],[11,"from_str","","",1,[[],[["loglevelfilter",4],["result",4]]]],[11,"description","","",7,[[]]],[11,"description","","",8,[[]]]],"p":[[4,"LogLevel"],[4,"LogLevelFilter"],[8,"Log"],[3,"LogRecord"],[3,"LogMetadata"],[3,"LogLocation"],[3,"MaxLogLevelFilter"],[3,"SetLoggerError"],[3,"ShutdownLoggerError"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);