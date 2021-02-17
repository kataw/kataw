# Kataw parser test case

## Input

`````js
07
;
08
;
00008
;
065
;
02
;
076
;
000
;
{}(01)
;
00008
;
032
;
0x8
;

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "07\n;\n08\n;\n00008\n;\n065\n;\n02\n;\n076\n;\n000\n;\n{}(01)\n;\n00008\n;\n032\n;\n0x8\n;\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 7,
                    "rawText": "07",
                    "flags": 8192,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 2
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 4
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 8,
                    "rawText": "08",
                    "flags": 24576,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 7
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 4,
                "end": 9
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 8,
                    "rawText": "00008",
                    "flags": 24576,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 9,
                    "end": 15
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 9,
                "end": 17
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 53,
                    "rawText": "065",
                    "flags": 24576,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 17,
                    "end": 21
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 17,
                "end": 23
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 2,
                    "rawText": "02",
                    "flags": 24576,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 23,
                    "end": 26
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 23,
                "end": 28
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 62,
                    "rawText": "076",
                    "flags": 24576,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 28,
                    "end": 32
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 28,
                "end": 34
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 0,
                    "rawText": "000",
                    "flags": 24576,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 34,
                    "end": 38
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 34,
                "end": 40
            },
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 42,
                    "end": 42
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 40,
                "end": 43
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "01",
                        "flags": 8192,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 44,
                        "end": 46
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 43,
                    "end": 47
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 43,
                "end": 49
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 8,
                    "rawText": "00008",
                    "flags": 24576,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 49,
                    "end": 55
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 49,
                "end": 57
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 26,
                    "rawText": "032",
                    "flags": 24576,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 57,
                    "end": 61
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 57,
                "end": 63
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 8,
                    "rawText": "0x8",
                    "flags": 16640,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 63,
                    "end": 67
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 63,
                "end": 69
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 69
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 70
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

