# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true, module: true }
`````

## Input

`````js
" a " b "
;
" a " b " c "
;
" a ' b "
;
" a ' b ' c "
;
" a ` b "
;
" a ` b ` c "
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "\" a \" b \"\n;\n\" a \" b \" c \"\n;\n\" a ' b \"\n;\n\" a ' b ' c \"\n;\n\" a ` b \"\n;\n\" a ` b ` c \"",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": " a ",
                    "rawText": " a ",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 5
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 5
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "b",
                    "rawText": "b",
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 7
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 5,
                "end": 7
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": "",
                    "rawText": " \"",
                    "flags": 589826,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 7,
                    "end": 9
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 7,
                "end": 11
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": " a ",
                    "rawText": " a ",
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 11,
                    "end": 17
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 11,
                "end": 17
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "b",
                    "rawText": "b",
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 17,
                    "end": 19
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 17,
                "end": 19
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": " c ",
                    "rawText": " c ",
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 19,
                    "end": 25
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 19,
                "end": 27
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": " a ' b ",
                    "rawText": " a ' b ",
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 27,
                    "end": 37
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 27,
                "end": 39
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": " a ' b ' c ",
                    "rawText": " a ' b ' c ",
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 39,
                    "end": 53
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 39,
                "end": 55
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": " a ` b ",
                    "rawText": " a ` b ",
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 55,
                    "end": 65
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 55,
                "end": 67
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": " a ` b ` c ",
                    "rawText": " a ` b ` c ",
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 67,
                    "end": 81
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 67,
                "end": 81
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 81
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 6,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated string literal",
            "start": 9,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 8,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 20,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 81
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

