# Kataw parser test case

## Input

`````js
class l\u0065t {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class l\\u0065t {}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "let",
                "rawText": "l\\u0065t",
                "flags": 75497472,
                "symbol": null,
                "transformFlags": 1025,
                "start": 5,
                "end": 14
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 16,
                "end": 17
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

