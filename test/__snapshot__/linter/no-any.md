# Kataw parser test case

## Input

`````js
let x: any;
`````

## Options

### Parser Options

`````js
{ allowTypes: true, lint: { noAny: true } }
`````

## Output

### CST

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
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234252,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 10
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 10
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 10
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 10
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "let x: any;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type declaration of 'any' loses type-safety. Consider replacing it with a more precise type - start: 6, end: 10

```

