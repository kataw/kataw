# Kataw parser test case

## Input

`````js
"prefix \'"
;
"prefix\""
;
"prefix\\"
;
"prefix\b"
;
"prefix\f"
;
"prefix\n"
;
"prefix\r"
;
"prefix\t"
;
"prefix\v"
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "\"prefix \\'\"\n;\n\"prefix\\\"\"\n;\n\"prefix\\\\\"\n;\n\"prefix\\b\"\n;\n\"prefix\\f\"\n;\n\"prefix\\n\"\n;\n\"prefix\\r\"\n;\n\"prefix\\t\"\n;\n\"prefix\\v\"",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "prefix '",
                "rawText": "prefix '",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 11
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "prefix\"",
                "rawText": "prefix\"",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 24
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 26
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "prefix\\",
                "rawText": "prefix\\",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 26,
                "end": 37
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 26,
            "end": 39
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "prefix\b",
                "rawText": "prefix\b",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 39,
                "end": 50
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 39,
            "end": 52
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "prefix\f",
                "rawText": "prefix\f",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 52,
                "end": 63
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 52,
            "end": 65
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "prefix\n",
                "rawText": "prefix\n",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 65,
                "end": 76
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 65,
            "end": 78
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "prefix\r",
                "rawText": "prefix\r",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 78,
                "end": 89
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 78,
            "end": 91
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "prefix\t",
                "rawText": "prefix\t",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 91,
                "end": 102
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 91,
            "end": 104
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "prefix\u000b",
                "rawText": "prefix\u000b",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 104,
                "end": 115
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 104,
            "end": 115
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 115
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

