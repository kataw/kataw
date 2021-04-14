# Kataw parser test case

## Input

`````js
(class x{}.foo())
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
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37814352,
                                "flags": 768,
                                "start": 1,
                                "end": 6
                            },
                            "name": {
                                "kind": 81921,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 6,
                                "end": 8
                            },
                            "typeParameters": null,
                            "classHeritage": null,
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 256,
                                "start": 9,
                                "end": 10
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 10
                        },
                        "expression": {
                            "kind": 81921,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 11,
                            "end": 14
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 14
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 15,
                        "end": 15
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 16
                },
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "(class x{}.foo())",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

