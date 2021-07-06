# Kataw parser test case

## Input

`````js
require(/* comment */)
new require(/* comment */)
define(/* comment */)
new define(/* comment */)
it(/* comment */)
new it(/* comment */)

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "require",
                    "rawText": "require",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 7
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 26
                },
                "expression": {
                    "kind": 134299649,
                    "text": "require",
                    "rawText": "require",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 34
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 35
                },
                "flags": 97,
                "transformFlags": 0,
                "start": 22,
                "end": 49
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 22,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "define",
                    "rawText": "define",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 49,
                    "end": 56
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 57,
                    "end": 57
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 49,
                "end": 71
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 49,
            "end": 71
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 71,
                    "end": 75
                },
                "expression": {
                    "kind": 134299649,
                    "text": "define",
                    "rawText": "define",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 75,
                    "end": 82
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 83,
                    "end": 83
                },
                "flags": 97,
                "transformFlags": 0,
                "start": 71,
                "end": 97
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 71,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "it",
                    "rawText": "it",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 97,
                    "end": 100
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 101,
                    "end": 101
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 97,
                "end": 115
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 97,
            "end": 115
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 115,
                    "end": 119
                },
                "expression": {
                    "kind": 134299649,
                    "text": "it",
                    "rawText": "it",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 119,
                    "end": 122
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 123,
                    "end": 123
                },
                "flags": 97,
                "transformFlags": 0,
                "start": 115,
                "end": 137
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 115,
            "end": 137
        }
    ],
    "isModule": false,
    "source": "require(/* comment */)\nnew require(/* comment */)\ndefine(/* comment */)\nnew define(/* comment */)\nit(/* comment */)\nnew it(/* comment */)\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 138
}
```

### Printed

```javascript

require();
new require();

define();

new define();

it();

new it();

```

### Diagnostics

```javascript
✔ No errors
```

