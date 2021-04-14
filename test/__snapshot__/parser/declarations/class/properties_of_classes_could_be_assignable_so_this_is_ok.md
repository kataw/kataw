# Kataw parser test case

## Input

`````js
for (class x { [a](){} }.x in c);
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
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "kind": 166,
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37814352,
                        "flags": 768,
                        "start": 5,
                        "end": 10
                    },
                    "name": {
                        "kind": 81921,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 10,
                        "end": 12
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
                                        "kind": 194,
                                        "expression": {
                                            "kind": 81921,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "flags": 256,
                                        "start": 14,
                                        "end": 18
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 19,
                                        "end": 20
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
                                            "start": 21,
                                            "end": 21
                                        },
                                        "flags": 256,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "flags": 0,
                                    "start": 18,
                                    "end": 22
                                },
                                "flags": 256,
                                "start": 14,
                                "end": 22
                            }
                        ],
                        "flags": 256,
                        "start": 14,
                        "end": 24
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 24
                },
                "expression": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 25,
                    "end": 26
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 26
            },
            "expression": {
                "kind": 81921,
                "text": "c",
                "rawText": "c",
                "flags": 768,
                "start": 29,
                "end": 31
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 32,
                "end": 33
            },
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "for (class x { [a](){} }.x in c);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

