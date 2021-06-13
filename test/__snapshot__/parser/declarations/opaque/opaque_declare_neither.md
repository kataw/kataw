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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 312,
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
                "start": 14,
                "end": 19
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 19,
                "end": 23
            },
            "typeParameters": null,
            "superType": null,
            "impltype": null,
            "flags": 2097152,
            "start": 7,
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


```

### Diagnostics

```javascript
✔ No errors
```

