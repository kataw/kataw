# Kataw parser test case

## Input

`````js
class A {"set"(){} "get"(){} "async"(){}}
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
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "A",
                "autofix": 0,
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
                                "kind": 67174403,
                                "value": "set",
                                "autofix": 0,
                                "flags": 768,
                                "start": 9,
                                "end": 14
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 15,
                                "end": 16
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 17,
                                    "end": 17
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 16,
                                "end": 18
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 14,
                            "end": 18
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 18
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 67174403,
                                "value": "get",
                                "autofix": 0,
                                "flags": 768,
                                "start": 18,
                                "end": 24
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 25,
                                "end": 26
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 27,
                                    "end": 27
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 26,
                                "end": 28
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 24,
                            "end": 28
                        },
                        "flags": 256,
                        "start": 18,
                        "end": 28
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 67174403,
                                "value": "async",
                                "autofix": 0,
                                "flags": 768,
                                "start": 28,
                                "end": 36
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 38
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 39
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 38,
                                "end": 40
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 36,
                            "end": 40
                        },
                        "flags": 256,
                        "start": 28,
                        "end": 40
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 41
            },
            "flags": 128,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "class A {\"set\"(){} \"get\"(){} \"async\"(){}}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

