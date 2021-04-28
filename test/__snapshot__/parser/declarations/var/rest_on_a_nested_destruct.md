# Kataw parser test case

## Input

`````js
var [...[foo, bar]] = obj;
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
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 5,
                                            "start": 512,
                                            "end": 8
                                        },
                                        "binding": {
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 202,
                                                "elements": [
                                                    {
                                                        "kind": 244,
                                                        "ellipsisToken": null,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 768,
                                                            "start": 9,
                                                            "end": 12
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 256,
                                                        "start": 9,
                                                        "end": 12
                                                    },
                                                    {
                                                        "kind": 244,
                                                        "ellipsisToken": null,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 768,
                                                            "start": 13,
                                                            "end": 17
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 256,
                                                        "start": 13,
                                                        "end": 17
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 9,
                                                "end": 17
                                            },
                                            "flags": 256,
                                            "start": 8,
                                            "end": 18
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 5,
                                "end": 18
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 768,
                            "start": 21,
                            "end": 25
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 25
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "var [...[foo, bar]] = obj;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
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

