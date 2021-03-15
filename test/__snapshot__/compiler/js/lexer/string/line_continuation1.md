# Kataw parser test case

## Input

`````js
"\
"
;
"pre\
"
;
"\
post"
;
"pre\
post"
;
"\@{xd}@"
;
"pre\@{xd}@"
;
"\@{xd}@post"
;
"pre\@{xd}@post"
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "\"\\\n\"\n;\n\"pre\\\n\"\n;\n\"\\\npost\"\n;\n\"pre\\\npost\"\n;\n\"\\\r\"\n;\n\"pre\\\r\"\n;\n\"\\\rpost\"\n;\n\"pre\\\rpost\"",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "",
                "rawText": "",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "pre",
                "rawText": "pre",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 16
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "post",
                "rawText": "post",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 25
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 16,
            "end": 27
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "prepost",
                "rawText": "prepost",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 27,
                "end": 39
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 27,
            "end": 41
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "",
                "rawText": "",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 41,
                "end": 46
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 41,
            "end": 48
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "pre",
                "rawText": "pre",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 48,
                "end": 56
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 48,
            "end": 58
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "post",
                "rawText": "post",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 58,
                "end": 67
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 58,
            "end": 69
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "prepost",
                "rawText": "prepost",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 69,
                "end": 81
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 69,
            "end": 81
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

