# Kataw parser test case

## Input

`````js
class x{   static async static(){}    }
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 8,
                                "end": 17
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 23
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "static",
                                    "rawText": "static",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 30
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 32
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 34
                                },
                                "flags": 256,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 34
                            },
                            "flags": 256,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 34
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 34
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "class x{   static async static(){}    }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
class x {
  static async static() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

