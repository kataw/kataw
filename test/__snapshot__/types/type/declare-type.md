# Kataw parser test case

## Input

`````js
declare type bool = any;
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
                "start": 0,
                "end": 7
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 7,
                "end": 12
            },
            "name": {
                "kind": 134299649,
                "text": "bool",
                "rawText": "bool",
                "flags": 96,
                "start": 12,
                "end": 17
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 17,
                "end": 19
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234252,
                    "flags": 2097216,
                    "start": 19,
                    "end": 23
                },
                "flags": 2097152,
                "start": 19,
                "end": 23
            },
            "flags": 4160,
            "start": 7,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "declare type bool = any;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

declare type bool = any 
```

### Diagnostics

```javascript
✔ No errors
```

