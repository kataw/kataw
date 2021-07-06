# Kataw parser test case

## Input

`````js
declare type T = number;
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
            "declareToken": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "transformFlags": 0,
                "start": 7,
                "end": 12
            },
            "name": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "transformFlags": 0,
                "start": 12,
                "end": 14
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 23
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 16,
                "end": 23
            },
            "flags": 4160,
            "transformFlags": 0,
            "start": 7,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "declare type T = number;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

declare type T = number 
```

### Diagnostics

```javascript
✔ No errors
```

