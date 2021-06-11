# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/failing-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/failing-cases/gen/function_param_list
> :: test: function param list
> :: case: { x: import.meta }
## Options

`````js
{}
`````
## Input

`````js
function x({ x: import.meta }) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 204,
                                    "ellipsisToken": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "value": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 15,
                                        "end": 15
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 12,
                                    "end": 15
                                },
                                {
                                    "kind": 204,
                                    "ellipsisToken": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "import",
                                        "rawText": "import",
                                        "flags": 96,
                                        "start": 15,
                                        "end": 22
                                    },
                                    "value": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 22,
                                        "end": 22
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 15,
                                    "end": 22
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 12,
                            "end": 22
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 22
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 23
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 22,
                    "end": 22
                },
                "flags": 32,
                "start": 22,
                "end": 22
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "meta",
                "rawText": "meta",
                "flags": 96,
                "start": 23,
                "end": 27
            },
            "flags": 16,
            "start": 23,
            "end": 27
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 32,
                "end": 32
            },
            "flags": 16,
            "start": 30,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "function x({ x: import.meta }) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Object property expected - start: 15, end: 22
✖ ',' expected - start: 15, end: 22
✖ Object property expected - start: 22, end: 23
✖ ',' expected - start: 22, end: 23
✖ Declaration or statement expected - start: 27, end: 29
✖ Declaration or statement expected - start: 29, end: 30

```

