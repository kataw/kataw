# Kataw parser test case

## Input

`````js
const [foo] = arr, bar = arr2;
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
            "lexicalKeyword": null,
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
                                            "kind": 81921,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 7,
                                            "end": 10
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 7,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 7,
                                "end": 10
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "text": "arr",
                            "rawText": "arr",
                            "flags": 768,
                            "start": 13,
                            "end": 17
                        },
                        "flags": 128,
                        "start": 5,
                        "end": 17
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 768,
                            "start": 18,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "text": "arr2",
                            "rawText": "arr2",
                            "flags": 768,
                            "start": 24,
                            "end": 29
                        },
                        "flags": 128,
                        "start": 18,
                        "end": 29
                    }
                ],
                "flags": 160,
                "start": 5,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "const [foo] = arr, bar = arr2;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 0,
            "end": 5
        }
    ],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

