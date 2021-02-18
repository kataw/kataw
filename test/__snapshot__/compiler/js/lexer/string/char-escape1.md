# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true, module: true }
`````

## Input

`````js
"\'"
;
"\""
;
"\\"
;
"\b"
;
"\f"
;
"\n"
;
"\r"
;
"\t"
;
"\v"
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "\"\\'\"\n;\n\"\\\"\"\n;\n\"\\\\\"\n;\n\"\\b\"\n;\n\"\\f\"\n;\n\"\\n\"\n;\n\"\\r\"\n;\n\"\\t\"\n;\n\"\\v\"",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": "'",
                    "rawText": "'",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 4
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 6
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": "\"",
                    "rawText": "\"",
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 6,
                    "end": 11
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 6,
                "end": 13
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": "\\",
                    "rawText": "\\",
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 13,
                    "end": 18
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 13,
                "end": 20
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": "\b",
                    "rawText": "\b",
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 20,
                    "end": 25
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 20,
                "end": 27
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": "\f",
                    "rawText": "\f",
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 27,
                    "end": 32
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 27,
                "end": 34
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": "\n",
                    "rawText": "\n",
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 34,
                    "end": 39
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 34,
                "end": 41
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": "\r",
                    "rawText": "\r",
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 41,
                    "end": 46
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 41,
                "end": 48
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": "\t",
                    "rawText": "\t",
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 48,
                    "end": 53
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 48,
                "end": 55
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": "\u000b",
                    "rawText": "\u000b",
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 55,
                    "end": 60
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 55,
                "end": 60
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 60
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
    "end": 60
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
