# Kataw parser test case

## Input

`````js
class v extends.foo {}
`````

## Options

### Parser Options

`````js
{}
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "v",
                "rawText": "v",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 15,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 16,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 19
                },
                "typeParameter": null,
                "flags": 16,
                "start": 15,
                "end": 19
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 21,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "class v extends.foo {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 15, end: 16

```

