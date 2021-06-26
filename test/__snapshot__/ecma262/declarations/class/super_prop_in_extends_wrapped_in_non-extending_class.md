# Kataw parser test case

## Input

`````js
class a { foo(){      class x extends super.foo {}    }}
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
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
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 13
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 14,
                                    "end": 15
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 178,
                                                "declareKeyword": null,
                                                "decorators": null,
                                                "classKeyword": {
                                                    "kind": 37822544,
                                                    "flags": 80,
                                                    "start": 16,
                                                    "end": 27
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 27,
                                                    "end": 29
                                                },
                                                "typeParameters": null,
                                                "tail": {
                                                    "kind": 277,
                                                    "classHeritage": {
                                                        "kind": 279,
                                                        "extendsKeyword": {
                                                            "kind": 4194391,
                                                            "flags": 80,
                                                            "start": 29,
                                                            "end": 37
                                                        },
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 225,
                                                                "superKeyword": {
                                                                    "kind": 4259935,
                                                                    "flags": 96,
                                                                    "start": 37,
                                                                    "end": 43
                                                                },
                                                                "flags": 96,
                                                                "start": 37,
                                                                "end": 43
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 96,
                                                                "start": 44,
                                                                "end": 47
                                                            },
                                                            "flags": 96,
                                                            "start": 37,
                                                            "end": 47
                                                        },
                                                        "typeParameter": null,
                                                        "flags": 16,
                                                        "start": 37,
                                                        "end": 47
                                                    },
                                                    "body": {
                                                        "kind": 303,
                                                        "elements": [],
                                                        "flags": 32,
                                                        "start": 49,
                                                        "end": 49
                                                    },
                                                    "flags": 29,
                                                    "start": 32,
                                                    "end": 50
                                                },
                                                "flags": 16,
                                                "start": 16,
                                                "end": 50
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 16,
                                        "end": 50
                                    },
                                    "flags": 32,
                                    "start": 15,
                                    "end": 55
                                },
                                "flags": 0,
                                "start": 13,
                                "end": 55
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 55
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 55
                },
                "flags": 7,
                "start": 32,
                "end": 56
            },
            "flags": 16,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "class a { foo(){      class x extends super.foo {}    }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

class a {
  foo() {
    class x  {}
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

