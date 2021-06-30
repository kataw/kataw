# Kataw parser test case

## Input

`````js
class x{   static *static(){}    }
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
                "text": "x",
                "rawText": "x",
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 8,
                                "end": 17
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 17,
                                "end": 19
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "static",
                                    "rawText": "static",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 25
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 26,
                                    "end": 27
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 28,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "start": 27,
                                    "end": 29
                                },
                                "flags": 0,
                                "start": 25,
                                "end": 29
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 29
                        }
                    ],
                    "flags": 32,
                    "start": 8,
                    "end": 29
                },
                "flags": 7,
                "start": 32,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "class x{   static *static(){}    }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

class x {
  static * static() { }
}

```

### Diagnostics

```javascript
✔ No errors
```

