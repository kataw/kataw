# Kataw parser test case

## Input

`````js
let [[]]=0
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 202,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 6,
                                                "end": 6
                                            },
                                            "flags": 32,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 5,
                                        "end": 7
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "original": "0",
                            "rawText": "0",
                            "flags": 96,
                            "start": 9,
                            "end": 10
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 10
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 10
            },
            "flags": 33554448,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "let [[]]=0",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
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

