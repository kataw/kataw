# Kataw parser test case

## Input

`````js
const [...foo] = obj;
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
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 768,
                                            "start": 7,
                                            "end": 10
                                        },
                                        "binding": {
                                            "kind": 81921,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 10,
                                            "end": 13
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 7,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 7,
                                "end": 13
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 768,
                            "start": 16,
                            "end": 20
                        },
                        "flags": 128,
                        "start": 5,
                        "end": 20
                    }
                ],
                "flags": 160,
                "start": 5,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "const [...foo] = obj;",
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
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

