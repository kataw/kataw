# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: yield * 1; return 37; yield * 'dead';
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { yield * 1; return 37; yield * 'dead'; }}
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
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 15,
                "end": 15
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 18,
                                "end": 27
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "start": 27,
                                "end": 35
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 36,
                                "end": 36
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "start": 39,
                                                    "end": 45
                                                },
                                                "operatorToken": {
                                                    "kind": 67143222,
                                                    "flags": 96,
                                                    "start": 45,
                                                    "end": 47
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 47,
                                                    "end": 49
                                                },
                                                "flags": 96,
                                                "start": 39,
                                                "end": 49
                                            },
                                            "flags": 16,
                                            "start": 39,
                                            "end": 50
                                        },
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 80,
                                                "start": 50,
                                                "end": 57
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 37,
                                                "rawText": "37",
                                                "flags": 96,
                                                "start": 57,
                                                "end": 60
                                            },
                                            "flags": 80,
                                            "start": 50,
                                            "end": 61
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "start": 61,
                                                    "end": 67
                                                },
                                                "operatorToken": {
                                                    "kind": 67143222,
                                                    "flags": 96,
                                                    "start": 67,
                                                    "end": 69
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "dead",
                                                    "rawText": "'dead'",
                                                    "flags": 4194400,
                                                    "start": 69,
                                                    "end": 76
                                                },
                                                "flags": 96,
                                                "start": 61,
                                                "end": 76
                                            },
                                            "flags": 16,
                                            "start": 61,
                                            "end": 77
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 77
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 79
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 79
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 79
                },
                "flags": 32,
                "start": 16,
                "end": 80
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 80
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { yield * 1; return 37; yield * 'dead'; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 80
}
```

### Printed

```javascript

  function* gen() {
    function not_gen() {
      yield * 1;
      return 37;
      yield * "'dead'";
    }
  }

```

### Diagnostics

```javascript
✔ No errors
```

