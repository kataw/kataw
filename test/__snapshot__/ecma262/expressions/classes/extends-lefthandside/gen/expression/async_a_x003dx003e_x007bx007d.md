# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/gen/expression
> :: test: expression
> :: case: async a => {}
## Options

`````js
{}
`````
## Input

`````js
(class B extends async a => {} {})
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
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "start": 8,
                                "end": 16
                            },
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 16,
                                    "end": 22
                                },
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 24
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 24,
                                    "end": 27
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 29,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "start": 27,
                                    "end": 30
                                },
                                "flags": 288,
                                "start": 16,
                                "end": 30
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "start": 16,
                            "end": 30
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "start": 32,
                            "end": 32
                        },
                        "flags": 8,
                        "start": 32,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 33
                },
                "flags": 32,
                "start": 0,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "(class B extends async a => {} {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 22, end: 24

```

