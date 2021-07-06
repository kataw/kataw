# Kataw parser test case

## Input

`````js

var x;

x
=
true;
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
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 4
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
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 6
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 4,
                        "end": 6
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "right": {
                    "kind": 24752947,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 17
                },
                "flags": 1,
                "transformFlags": 128,
                "start": 7,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 7,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "\nvar x;\n\nx\n=\ntrue;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

var x;
x = true;

```

### Diagnostics

```javascript
✔ No errors
```

