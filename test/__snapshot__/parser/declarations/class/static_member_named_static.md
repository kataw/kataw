# Kataw parser test case

## Input

`````js
class x{   static static(){}    }
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

### Hybrid CST

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
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 768,
                            "start": 8,
                            "end": 17
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 768,
                                "start": 17,
                                "end": 24
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 25,
                                "end": 26
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 256,
                                "start": 26,
                                "end": 28
                            },
                            "flags": 0,
                            "start": 24,
                            "end": 28
                        },
                        "flags": 256,
                        "start": 17,
                        "end": 28
                    }
                ],
                "flags": 256,
                "start": 8,
                "end": 33
            },
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "class x{   static static(){}    }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

