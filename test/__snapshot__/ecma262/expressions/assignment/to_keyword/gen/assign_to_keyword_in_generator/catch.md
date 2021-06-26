# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_keyword_in_generator
> :: test: assign to keyword in generator
> :: case: catch
## Options

`````js
{}
`````
## Input

`````js
function *f(){
  catch = 1;
}
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
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 14,
                                    "end": 14
                                },
                                "flags": 17,
                                "start": 14,
                                "end": 14
                            },
                            "catchClause": {
                                "kind": 173,
                                "catchKeyword": {
                                    "kind": 4202575,
                                    "flags": 81,
                                    "start": 14,
                                    "end": 22
                                },
                                "catchParameter": null,
                                "block": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 22,
                                        "end": 22
                                    },
                                    "flags": 16,
                                    "start": 22,
                                    "end": 22
                                },
                                "flags": 81,
                                "start": 14,
                                "end": 22
                            },
                            "finallyKeyword": null,
                            "finallyBlock": null,
                            "flags": 16,
                            "start": 14,
                            "end": 22
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 22
                },
                "flags": 32,
                "start": 13,
                "end": 22
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 24,
                "end": 26
            },
            "flags": 16,
            "start": 24,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  catch = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 14, end: 22
✖ The parser expected to find a '}' to match the '{' token here - start: 23, end: 24
✖ Declaration or statement expected - start: 27, end: 29

```

