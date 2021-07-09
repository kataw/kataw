# Kataw parser test case

### Printer Options

`````js
{ printWidth: 60 }
`````

### Options

`````js
{ module: true, allowTypes: true }
`````

## Input

`````js
@connect
class a {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 1
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "connect",
                            "rawText": "connect",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 8
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 8
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 18
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 32,
                "end": 19
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": true,
    "source": "@connect\nclass a {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@connect
class a {}
```

### Diagnostics

```javascript
✔ No errors
```

