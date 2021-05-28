# Kataw parser test case

## Input

`````js
async function f() { class C { aaa = await } }
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
            },
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
                                "start": 20,
                                "end": 26
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 26,
                                "end": 28
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 262,
                                    "elements": [
                                        {
                                            "kind": 280,
                                            "decorators": null,
                                            "declaredToken": null,
                                            "staticToken": null,
                                            "asyncKeyword": null,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "aaa",
                                                "rawText": "aaa",
                                                "flags": 96,
                                                "start": 30,
                                                "end": 34
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 0,
                                                    "start": 36,
                                                    "end": 42
                                                },
                                                "expression": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "flags": 64,
                                                    "start": 42,
                                                    "end": 42
                                                },
                                                "flags": 32,
                                                "start": 36,
                                                "end": 42
                                            },
                                            "flags": 32,
                                            "start": 30,
                                            "end": 42
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 30,
                                    "end": 42
                                },
                                "flags": 28,
                                "start": 32,
                                "end": 44
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 44
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 44
                },
                "flags": 32,
                "start": 18,
                "end": 46
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "async function f() { class C { aaa = await } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 42, end: 44

```

