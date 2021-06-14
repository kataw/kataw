# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/gen/strict_directive_variable_in_for_in
> :: test: strict directive variable in for in
> :: case: { import.meta }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; var x, y, z; for ({ import.meta } in {});
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 13,
                "end": 17
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
                            "start": 17,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 17,
                        "end": 19
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 20,
                        "end": 22
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 23,
                            "end": 25
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 23,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 25
            },
            "flags": 16,
            "start": 13,
            "end": 26
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 26,
                "end": 30
            },
            "initializer": {
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
                                "start": 33,
                                "end": 40
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 33,
                        "end": 40
                    },
                    "flags": 48,
                    "start": 32,
                    "end": 40
                },
                "expression": {
                    "kind": 134299649,
                    "text": "meta",
                    "rawText": "meta",
                    "flags": 96,
                    "start": 41,
                    "end": 45
                },
                "flags": 536870944,
                "start": 26,
                "end": 45
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 45,
                "end": 45
            },
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 45,
                "end": 45
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 45,
                    "end": 45
                },
                "flags": 16,
                "start": 45,
                "end": 45
            },
            "flags": 80,
            "start": 26,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 47,
                    "end": 47
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "start": 47,
                    "end": 50
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 52,
                        "end": 52
                    },
                    "flags": 48,
                    "start": 50,
                    "end": 53
                },
                "flags": 32,
                "start": 47,
                "end": 53
            },
            "flags": 16,
            "start": 47,
            "end": 53
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 54,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "'use strict'; var x, y, z; for ({ import.meta } in {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 40, end: 41
✖ ',' expected - start: 40, end: 41
✖ Identifier expected - start: 45, end: 47
✖ Identifier expected - start: 47, end: 50
✖ Expected a `;` - start: 53, end: 54

```

