# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
"\u0123"
;
"\u4567"
;
"\u89ab"
;
"\ucdef"
;
"\uABCD"
;
"\uDE00"
;
"prefix \u0123"
;
"\u0123 postfix"
;
"\u0123\u4567"
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\"\\u0123\"\n;\n\"\\u4567\"\n;\n\"\\u89ab\"\n;\n\"\\ucdef\"\n;\n\"\\uABCD\"\n;\n\"\\uDE00\"\n;\n\"prefix \\u0123\"\n;\n\"\\u0123 postfix\"\n;\n\"\\u0123\\u4567\"",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{x123}@",
                "rawText": "@{x123}@",
                "flags": 8388608,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{x4567}@",
                "rawText": "@{x4567}@",
                "flags": 8421376,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 19
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 10,
            "end": 21
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{x89ab}@",
                "rawText": "@{x89ab}@",
                "flags": 8421376,
                "intersects": false,
                "transformFlags": 0,
                "start": 21,
                "end": 30
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 21,
            "end": 32
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{xcdef}@",
                "rawText": "@{xcdef}@",
                "flags": 8421376,
                "intersects": false,
                "transformFlags": 0,
                "start": 32,
                "end": 41
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 32,
            "end": 43
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{xabcd}@",
                "rawText": "@{xabcd}@",
                "flags": 8421376,
                "intersects": false,
                "transformFlags": 0,
                "start": 43,
                "end": 52
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 43,
            "end": 54
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "\ude00",
                "rawText": "\ude00",
                "flags": 8421376,
                "intersects": false,
                "transformFlags": 0,
                "start": 54,
                "end": 63
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 54,
            "end": 65
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "prefix @{x123}@",
                "rawText": "prefix @{x123}@",
                "flags": 8421376,
                "intersects": false,
                "transformFlags": 0,
                "start": 65,
                "end": 81
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 65,
            "end": 83
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{x123}@ postfix",
                "rawText": "@{x123}@ postfix",
                "flags": 8421376,
                "intersects": false,
                "transformFlags": 0,
                "start": 83,
                "end": 100
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 83,
            "end": 102
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{x123}@@{x4567}@",
                "rawText": "@{x123}@@{x4567}@",
                "flags": 8421376,
                "intersects": false,
                "transformFlags": 0,
                "start": 102,
                "end": 117
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 102,
            "end": 117
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
    "end": 117
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

