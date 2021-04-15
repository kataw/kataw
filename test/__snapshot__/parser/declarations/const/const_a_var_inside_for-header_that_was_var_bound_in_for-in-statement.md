# Kataw parser test case

## Input

`````js
for (const x in obj) { var x = 13 }
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
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 10,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 10,
                        "end": 12
                    }
                ],
                "flags": 160,
                "start": 10,
                "end": 12
            },
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 768,
                "start": 15,
                "end": 19
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 768,
                                "start": 22,
                                "end": 26
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 26,
                                            "end": 28
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": 13,
                                            "rawText": "13",
                                            "flags": 768,
                                            "start": 30,
                                            "end": 33
                                        },
                                        "flags": 128,
                                        "start": 26,
                                        "end": 33
                                    }
                                ],
                                "flags": 128,
                                "start": 26,
                                "end": 33
                            },
                            "flags": 128,
                            "start": 22,
                            "end": 33
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 22,
                    "end": 33
                },
                "flags": 128,
                "start": 20,
                "end": 35
            },
            "flags": 128,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "for (const x in obj) { var x = 13 }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

