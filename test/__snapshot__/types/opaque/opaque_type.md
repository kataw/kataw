# Kataw parser test case

## Input

`````js
opaque type ID = number;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
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
                "text": "ID",
                "rawText": "ID",
                "flags": 96,
                "transformFlags": 0,
                "start": 11,
                "end": 14
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
                    "start": 16,
                    "end": 23
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 16,
                "end": 23
            },
            "flags": 2097152,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 23,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "opaque type ID = number;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
opaque type ID = number;
```

### Diagnostics

```javascript
✔ No errors
```

