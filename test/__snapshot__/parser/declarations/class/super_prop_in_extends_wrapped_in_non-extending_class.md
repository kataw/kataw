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
                "flags": 0,
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
            "members": {
                "kind": 277,
                "classHeritage": null,
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
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 9,
                                "end": 13
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 14,
                                "end": 15
                            },
                            "type": null,
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
                                                "flags": 0,
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
                                            "members": {
                                                "kind": 277,
                                                "classHeritage": null,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 16,
                                                "end": 16
                                            },
                                            "flags": 16,
                                            "start": 16,
                                            "end": 29
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 16,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 29
                            },
                            "flags": 0,
                            "start": 13,
                            "end": 29
                        },
                        "flags": 0,
                        "start": 9,
                        "end": 29
                    },
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "extends",
                            "rawText": "extends",
                            "flags": 96,
                            "start": 29,
                            "end": 37
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 29,
                        "end": 37
                    },
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "super",
                            "rawText": "super",
                            "flags": 96,
                            "start": 37,
                            "end": 43
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 37,
                        "end": 43
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 44,
                "end": 47
            },
            "flags": 16,
            "start": 44,
            "end": 47
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 49,
                "end": 49
            },
            "flags": 16,
            "start": 47,
            "end": 50
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

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 29, end: 37
✖ The parser expected to find a '}' to match the '{' token here - start: 43, end: 44
✖ Expected a `;` - start: 47, end: 49
✖ Declaration or statement expected - start: 50, end: 55
✖ Declaration or statement expected - start: 55, end: 56

```

