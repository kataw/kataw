# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-negative-tests/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-negative-tests/gen/variable_in_for_in
> :: test: variable in for in
> :: case: { import.meta }
## Options

`````js
{}
`````
## Input

`````js
var x, y, z; for (x in { import.meta } = {});
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 5
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 6,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 6,
                        "end": 8
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 9,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 9,
                        "end": 11
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 12,
                "end": 16
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 18,
                "end": 19
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 19,
                "end": 22
            },
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "import",
                                "rawText": "import",
                                "flags": 96,
                                "start": 24,
                                "end": 31
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 24,
                        "end": 31
                    },
                    "flags": 48,
                    "start": 22,
                    "end": 31
                },
                "expression": {
                    "kind": 134299649,
                    "text": "meta",
                    "rawText": "meta",
                    "flags": 96,
                    "start": 32,
                    "end": 36
                },
                "flags": 536870944,
                "start": 22,
                "end": 36
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 36,
                    "end": 36
                },
                "flags": 16,
                "start": 36,
                "end": 36
            },
            "flags": 80,
            "start": 12,
            "end": 36
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 42,
                "end": 42
            },
            "flags": 16,
            "start": 40,
            "end": 43
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 44,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "var x, y, z; for (x in { import.meta } = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 31, end: 32
✖ ',' expected - start: 31, end: 32
✖ Expected a ')' to match the '(' token here - start: 36, end: 38
✖ Declaration or statement expected - start: 38, end: 40
✖ Declaration or statement expected - start: 43, end: 44

```

