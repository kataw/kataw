# Kataw parser test case

## Input

`````js
type x
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": null,
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 6,
                        "end": 6
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 6,
                    "end": 6
                },
                "flags": 2097152,
                "start": 6,
                "end": 6
            },
            "flags": 2097152,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "type x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An TypeAlias declaration require a '=' - start: 6, end: 6

```

