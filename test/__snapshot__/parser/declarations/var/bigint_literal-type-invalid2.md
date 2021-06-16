# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, allowTypes: true }
`````

## Input

`````js
var a: 1e5n
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
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
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
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134217968,
                                "text": 100000,
                                "flags": 2097216,
                                "start": 6,
                                "end": 10
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 10
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 10
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "n",
                            "rawText": "n",
                            "flags": 96,
                            "start": 10,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 10,
                        "end": 11
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "var a: 1e5n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unexpected token. - start: 6, end: 10
✖ ',' expected - start: 10, end: 11

```

