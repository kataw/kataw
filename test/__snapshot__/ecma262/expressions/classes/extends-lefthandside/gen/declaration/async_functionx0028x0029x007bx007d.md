# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/gen/declaration
> :: test: declaration
> :: case: async function(){}
## Options

`````js
{}
`````
## Input

`````js
class A extends async function(){} {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 15,
                            "end": 21
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 21,
                            "end": 30
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 30,
                            "end": 30
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 33,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 32,
                            "end": 34
                        },
                        "returnType": null,
                        "flags": 160,
                        "start": 15,
                        "end": 34
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 34
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 36,
                    "end": 36
                },
                "flags": 7,
                "start": 32,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "class A extends async function(){} {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

class A  {}
```

### Diagnostics

```javascript
✔ No errors
```

