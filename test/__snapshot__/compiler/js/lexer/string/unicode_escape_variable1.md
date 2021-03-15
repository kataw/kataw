# Kataw parser test case

## Input

`````js
"\u{0123}"
;
"\u{4567}"
;
"\u{89abc}"
;
"\u{defAB}"
;
"\u{CDEF}"
;
"prefix \u{012345}"
;
"\u{012345} postfix"
;
"\u{012345}\u{6789a}"
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\"\\u{0123}\"\n;\n\"\\u{4567}\"\n;\n\"\\u{89abc}\"\n;\n\"\\u{defAB}\"\n;\n\"\\u{CDEF}\"\n;\n\"prefix \\u{012345}\"\n;\n\"\\u{012345} postfix\"\n;\n\"\\u{012345}\\u{6789a}\"",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{x123}@",
                "rawText": "@{x123}@",
                "flags": 4194304,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 10
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{x4567}@",
                "rawText": "@{x4567}@",
                "flags": 4227072,
                "intersects": false,
                "transformFlags": 1,
                "start": 12,
                "end": 23
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 12,
            "end": 25
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{x226}@@{x2bc}@",
                "rawText": "@{x226}@@{x2bc}@",
                "flags": 4227072,
                "intersects": false,
                "transformFlags": 1,
                "start": 25,
                "end": 37
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 25,
            "end": 39
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{x37b}@@{x3ab}@",
                "rawText": "@{x37b}@@{x3ab}@",
                "flags": 4227072,
                "intersects": false,
                "transformFlags": 1,
                "start": 39,
                "end": 51
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 39,
            "end": 53
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{xcdef}@",
                "rawText": "@{xcdef}@",
                "flags": 4227072,
                "intersects": false,
                "transformFlags": 1,
                "start": 53,
                "end": 64
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 53,
            "end": 66
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "prefix H@{x345}@",
                "rawText": "prefix H@{x345}@",
                "flags": 4227072,
                "intersects": false,
                "transformFlags": 1,
                "start": 66,
                "end": 86
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 66,
            "end": 88
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "H@{x345}@ postfix",
                "rawText": "H@{x345}@ postfix",
                "flags": 4227072,
                "intersects": false,
                "transformFlags": 1,
                "start": 88,
                "end": 109
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 88,
            "end": 111
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "H@{x345}@@{x19e}@@{x9a}@",
                "rawText": "H@{x345}@@{x19e}@@{x9a}@",
                "flags": 4227072,
                "intersects": false,
                "transformFlags": 1,
                "start": 111,
                "end": 133
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 111,
            "end": 133
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 133
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

