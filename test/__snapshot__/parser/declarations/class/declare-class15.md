# Kataw parser test case

## Input

`````js
declare var string: any;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 7,
                "end": 11
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "string",
                            "rawText": "string",
                            "flags": 96,
                            "start": 11,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234252,
                                "flags": 2097216,
                                "start": 19,
                                "end": 23
                            },
                            "flags": 2097152,
                            "start": 19,
                            "end": 23
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 11,
                        "end": 23
                    }
                ],
                "flags": 16,
                "start": 11,
                "end": 23
            },
            "flags": 4112,
            "start": 7,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "declare var string: any;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

var string;
```

### Diagnostics

```javascript
✔ No errors
```

