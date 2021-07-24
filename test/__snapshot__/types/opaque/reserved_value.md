# Kataw parser test case

## Input

`````js
opaque type switch = number;
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
            "kind": 312,
            "declareToken": null,
            "opaqueToken": {
                "kind": 24822,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 11
            },
            "name": {
                "kind": 134299649,
                "text": "switch",
                "rawText": "switch",
                "flags": 96,
                "transformFlags": 0,
                "start": 11,
                "end": 18
            },
            "typeParameters": null,
            "superType": null,
            "impltype": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 27
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 20,
                "end": 27
            },
            "flags": 2097152,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 27,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "opaque type switch = number;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
opaque type switch = number;
```

### Diagnostics

```javascript
✔ No errors
```

