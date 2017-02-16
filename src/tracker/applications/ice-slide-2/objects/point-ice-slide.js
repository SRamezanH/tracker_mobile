'use strict';

module.exports = {
  name: 'Ice Slide 2',
  type: 'point',
  mass: 86,
  color: [ 102, 204, 0, 255 ],
  params: [ 't', 'x', 'y', 'v_x', 'v_y', 'a_x', 'a_y', 'K' ],
  bounds: {
    'y': {
      min: -1,
      max: 1
    },
    'v_y': {
      min: -3,
      max: 3
    },
    'a_y': {
      min: -5,
      max: 5
    }
  },
  precisions: {
    't': 1,
    'default': 2
  },
  start: 1,
  track: false,
  frames: [
    [ 0.000000000E0, -2.298477865E-2, 7.240295553E-3, , , , , ],
    [ 2.000000000E-1, 8.609993361E-1, 1.428197951E-2, 4.344357888E0, -4.152787973E-3, , , 9.436731353E0 ],
    [ 4.000000000E-1, 1.714758377E0, 5.579180364E-3, 4.192284598E0, -2.572922983E-2, -8.712471787E-1, 1.276788849E-2, 8.787956072E0 ],
    [ 6.000000000E-1, 2.537913175E0, 3.990287574E-3, 4.001166073E0, 9.208355941E-3, -8.195307819E-1, 1.769448789E-1, 8.004707370E0 ],
    [ 8.000000000E-1, 3.315224806E0, 9.262522740E-3, 3.848144864E0, 4.477788771E-2, -8.159196619E-1, -4.075406831E-2, 7.405111978E0 ],
    [ 1.000000000E0, 4.077171121E0, 2.190144266E-2, 3.696387547E0, 4.152787973E-3, -8.150168819E-1, -9.517880510E-2, 6.831649072E0 ],
    [ 1.200000000E0, 4.793779825E0, 1.092363793E-2, 3.506216941E0, -1.805559988E-2, -7.601407551E-1, -1.214883935E-1, 6.146941623E0 ],
    [ 1.400000000E0, 5.479657898E0, 1.467920271E-2, 3.391924994E0, -1.995143787E-2, -8.181766119E-1, 9.530777367E-2, 5.752776613E0 ],
    [ 1.600000000E0, 6.150549822E0, 2.943062781E-3, 3.201122442E0, -4.062509974E-3, -7.633004851E-1, 6.899818527E-2, 5.123600698E0 ],
    [ 1.800000000E0, 6.760106875E0, 1.305419872E-2, 3.048101233E0, 3.150702180E-2, -8.712471787E-1, 1.276788849E-2, 4.645956911E0 ],
    [ 2.000000000E0, 7.369790316E0, 1.554587150E-2, 2.896343916E0, -9.118077941E-3, -7.614949251E-1, -3.985128832E-2, 4.194445611E0 ],
    [ 2.200000000E0, 7.918644441E0, 9.406967540E-3, 2.705541365E0, 6.770849956E-3, -8.163710519E-1, -1.354169991E-2, 3.659999960E0 ],
    [ 2.400000000E0, 8.452006862E0, 1.825421148E-2, 2.591249417E0, 4.875011969E-3, , , 3.357298654E0 ],
    [ 2.600000000E0, 8.955144208E0, 1.135697233E-2, , , , , ]
  ]
};