# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: abstract class function !!
## Input

`````js
{ {} finally(x) { abstract class function !!
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "flags": 16,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 12
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 13
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 13,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 13,
                        "end": 14
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "abstract",
                            "rawText": "abstract",
                            "flags": 96,
                            "start": 17,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 26
                    },
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 0,
                            "start": 26,
                            "end": 32
                        },
                        "name": {
                            "kind": 16637,
                            "text": "",
                            "flags": 68,
                            "start": 32,
                            "end": 32
                        },
                        "typeParameters": null,
                        "classHeritage": null,
                        "members": {
                            "kind": 277,
                            "elements": [],
                            "flags": 32,
                            "start": 26,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 26,
                        "end": 32
                    },
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 0,
                            "start": 32,
                            "end": 41
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 16637,
                            "text": "",
                            "flags": 68,
                            "start": 41,
                            "end": 41
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 41,
                            "end": 41
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 41,
                                "end": 41
                            },
                            "flags": 32,
                            "start": 41,
                            "end": 41
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 32,
                        "end": 41
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 64,
                                "start": 41,
                                "end": 43
                            },
                            "operand": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 64,
                                    "start": 43,
                                    "end": 44
                                },
                                "operand": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 68,
                                    "start": 44,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 43,
                                "end": 44
                            },
                            "flags": 32,
                            "start": 41,
                            "end": 44
                        },
                        "flags": 16,
                        "start": 41,
                        "end": 44
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 44
            },
            "flags": 16,
            "start": 15,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { abstract class function !!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

{
  {
  }
   {
  } {
  }
  x;
}
{
  abstract;
  class {}

  ;
}
```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ Expected a `;` - start: 14, end: 15
✖ Expected a `;` - start: 26, end: 32
✖ Binding identifier expected - start: 32, end: 41
✖ Binding identifier expected - start: 41, end: 43
✖ Unexpected token. - start: 41, end: 43
✖ Expression expected - start: 44, end: 44

```

