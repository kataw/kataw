# Kataw parser test case

## Input

`````js
var a : { (x: T): number; }
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
            "kind": 155,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217969,
                                "properties": [],
                                "indexers": [],
                                "callProperties": [
                                    {
                                        "kind": 196,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 208,
                                            "functionTypeParameterList": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 11,
                                                        "end": 12
                                                    },
                                                    "optionalToken": null,
                                                    "typeAnnotation": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 768,
                                                            "start": 13,
                                                            "end": 15
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 13,
                                                        "end": 15
                                                    },
                                                    "flags": 0,
                                                    "start": 11,
                                                    "end": 15
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "staticToken": false,
                                        "returnType": {
                                            "kind": 134234345,
                                            "flags": 768,
                                            "start": 17,
                                            "end": 24
                                        },
                                        "flags": 0,
                                        "start": 9,
                                        "end": 25
                                    }
                                ],
                                "internalSlots": [],
                                "flags": 0,
                                "start": 7,
                                "end": 27
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 27
                        },
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 27
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 27
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "var a : { (x: T): number; }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

