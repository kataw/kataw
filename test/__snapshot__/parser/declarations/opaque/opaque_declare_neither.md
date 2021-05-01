# Kataw parser test case

## Input

`````js
declare opaque type Foo
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

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
            "opaqueToken": {
                "kind": 24822,
                "flags": 64,
                "start": 7,
                "end": 14
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 7,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "original": "Foo",
                "text": "Foo",
                "rawText": " Foo",
                "flags": 96,
                "start": 19,
                "end": 23
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": null,
            "flags": 4112,
            "start": 14,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "declare opaque type Foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

