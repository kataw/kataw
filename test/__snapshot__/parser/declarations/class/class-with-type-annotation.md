# Kataw parser test case

## Input

`````js
class Foo { bar():this { return this; }}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 11,
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
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 4276321,
                                    "flags": 64,
                                    "start": 18,
                                    "end": 22
                                },
                                "flags": 0,
                                "start": 17,
                                "end": 22
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 0,
                                                "start": 24,
                                                "end": 31
                                            },
                                            "expression": {
                                                "kind": 135,
                                                "flags": 96,
                                                "start": 31,
                                                "end": 36
                                            },
                                            "flags": 16,
                                            "start": 0,
                                            "end": 24
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 24,
                                    "end": 37
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 39
                            },
                            "flags": 0,
                            "start": 15,
                            "end": 39
                        },
                        "flags": 0,
                        "start": 11,
                        "end": 39
                    }
                ],
                "flags": 32,
                "start": 11,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "class Foo { bar():this { return this; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

