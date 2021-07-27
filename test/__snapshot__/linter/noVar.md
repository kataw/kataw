# Kataw parser test case

## Input

`````js
var foobar;
		foobar;
`````

## Options

### Parser Options

`````js
{ lint: { noVar: true } }
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
                "transformFlags": 0,
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
                            "text": "foobar",
                            "rawText": "foobar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 10
                        },
                        "type": null,
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
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foobar",
                "rawText": "foobar",
                "flags": 97,
                "transformFlags": 0,
                "start": 11,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 11,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "var foobar;\n\t\tfoobar;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unexpected var, use let or const instead - start: 3, end: 10

```

