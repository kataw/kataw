# Kataw parser test case

## Input

`````js
class w {  t[x](){}  }
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
                "text": "w",
                "rawText": "w",
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
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "key": {
                            "kind": 134299649,
                            "text": "t",
                            "rawText": "t",
                            "flags": 768,
                            "start": 9,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 9,
                        "end": 12
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 194,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 13,
                                    "end": 14
                                },
                                "flags": 256,
                                "start": 12,
                                "end": 15
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 16,
                                "end": 17
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
                                    "start": 18,
                                    "end": 18
                                },
                                "flags": 256,
                                "start": 17,
                                "end": 19
                            },
                            "flags": 0,
                            "start": 15,
                            "end": 19
                        },
                        "flags": 256,
                        "start": 12,
                        "end": 19
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "class w {  t[x](){}  }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

