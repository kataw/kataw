# Kataw parser test case

## Input

`````js
class X {
  ''() { }
}
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
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
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
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 201392131,
                                "text": "",
                                "rawText": "",
                                "flags": 67109633,
                                "start": 9,
                                "end": 14
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 15,
                                "end": 16
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
                                "start": 16,
                                "end": 20
                            },
                            "flags": 0,
                            "start": 14,
                            "end": 20
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 20
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
    "text": "class X {\n  ''() { }\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

